import React from "react";
import Link from "next/link";

export function Charlist({ characters }) {
  return (
    <div className="Char-list">
      <div className="row">
        <div className="col-sm">
          <h3>Character List</h3>
          <hr />
          <ul>
            {characters.map(char => (
              <li>
                <Link href={"/second?uuid=" + char.uuid}>
                  <a>{char.name}</a>
                </Link>
              </li>
            ))}
           
          </ul>
        </div>
      </div>
    </div>
  );
}
