import { serve } from '@hono/node-server';
import app from './app/index';
import sqlite3 from 'sqlite3';

const db = new sqlite3.Database('db/data.db', (err) => {
  if (err) {
    console.error('데이터베이스 연결 실패:', err.message);
  } else {
    console.log('SQLite 데이터베이스에 연결되었습니다.');
    db.run(
      `CREATE TABLE IF NOT EXISTS prompt (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        author TEXT NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        content TEXT NOT NULL
      )`,
      (err) => {
        if (err) {
          console.error('테이블 생성 오류:', err.message);
        } else {
          console.log('prompt 테이블이 준비되었습니다.');
        }
      }
    );
  }
});

serve(app, (info) => {
  console.log(`Server running at http://localhost:${info.port}`);
});

export default db;