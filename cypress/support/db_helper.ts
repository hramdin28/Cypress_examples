import { Pool, QueryArrayResult } from "pg";
import fs from "fs";

function readFile(filename: string): string {
  if (fs.existsSync(filename)) {
    return fs.readFileSync(filename, "utf8");
  }
  return null;
}

function queryPromise(query: string): Promise<unknown> {
  return new Promise((resolve, reject): void => {
    pool().query(query, (error: Error, results: QueryArrayResult) => {
      if (error) reject(error);
      else {
        pool().end();
        return resolve(results);
      }
    });
  });
}

const pool = (): Pool => {
  return new Pool({
    user: process.env.CYPRESS_MY_APP_DB_USERNAME,
    password: process.env.CYPRESS_MY_APP_DB_PASSWORD,
    host: process.env.CYPRESS_MY_APP_DB_HOST,
    database: process.env.CYPRESS_MY_APP_DB_DATABASE,
    port: Number(process.env.CYPRESS_MY_APP_DB_PORT),
  });
};

export const databaseConfig = {
  query(query: string): Promise<unknown> {
    return queryPromise(query);
  },
  queryFromFile(file: string): Promise<unknown> {
    const query = readFile(file);
    return queryPromise(query);
  },
};
