import React, { useState } from "react";
import UserKit from '../data/userKit';

import { Container, Listpart, Button } from "../styles/container";
import { createGlobalStyle } from "styled-components";

import regeneratorRuntime from "regenerator-runtime";

const GlobalStyle = createGlobalStyle`
  body {
    background: black;
  }
`;

export const SearchFunction = () => {

  const userKit = new UserKit();
  const [search, setSearch] = useState("");
  const [id, setId] = useState("");

  function getList() {
    userKit
      .getList()

      .then((res) => res.json())
      .then((data) => {
        var object = data;
        var query = search;

        var filter = object.filter(function (item) {
          return item.description.indexOf(query) !== -1;
        });

        if (filter.length === 0) {
          setId("No Results Were found");
        } else {
          setId(
            filter.map((data, i) => (
              <Listpart key={i + "x"}>
                <div>
                  <strong>{data.type}</strong> || {data.company} ||{" "}
                  {data.created_at}
                  {data.company_url} || {data.location} || <a>{data.url}</a> ||
                  <h2>{data.title}</h2>
                </div>
                <div>
                  <img src={data.company_logo}></img>
                </div>

                <div dangerouslySetInnerHTML={{ __html: data.description }} />
              </Listpart>
            ))
          );
        }
      })
      .catch((err) => {
        throw err;
      });
  }

  return (
    <Container>
      <GlobalStyle />
      <Button onClick={getList}>Search</Button>
      <input
        placeholder="search"
        type="search"
        id="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      ></input>
      <div id="print">{id}</div>
    </Container>
  );
};
