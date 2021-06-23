import { redBright } from 'chalk'
import sqlite from 'better-sqlite3'

const DISABLE_WAL = process.env["DISABLE_WAL"] === undefined

export function createQuery(positions, ...vars) {
    let query = "";
    let fmtQuery = "";
    for (let i = 0; i < positions.length || i < vars.length; ++i) {
        positions[i] && (fmtQuery += (query += positions[i]) && positions[i]);
        vars[i] && (fmtQuery += redBright((query += vars[i]) && vars[i]));
    }

    console.info("Query: " + fmtQuery);
    return query;
}

export function init() {
    const db = sqlite(':memory:')

    db.exec(`
    CREATE TABLE users (
        id integer primary key, 
        username string,
        password string
    );

    INSERT INTO users 
    ( username, password ) 
    VALUES 
    ( 'andrew', 'andrew' ),
    ( 'admin', 'admin' ),
    ( 'secret', 'FLAG{123}' );
    `)

    if (DISABLE_WAL) db.pragma('journal_mode = WAL');

    return db;
}

