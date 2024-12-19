import React, { ComponentProps } from "react";
import { Queries, render, RenderOptions } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";
import { MockedProvider } from "@apollo/client/testing";

const renderApollo = (
  node: React.ReactElement,
  {
    mocks,
    addTypename,
    defaultOptions,
    cache,
    resolvers,
    ...options
  }: Pick<
    ComponentProps<typeof MockedProvider>,
    "mocks" | "addTypename" | "defaultOptions" | "cache" | "resolvers"
  >
) => {
  return render(
    <MockedProvider
      mocks={mocks}
      addTypename={addTypename}
      defaultOptions={defaultOptions}
      cache={cache}
      resolvers={resolvers}
    >
      {node}
    </MockedProvider>,
    options
  );
};

export const renderWithRouterGenerator =
  (renderer: typeof render | typeof renderApollo) =>
  (
    node: React.ReactNode,
    options: Pick<
      ComponentProps<typeof MockedProvider>,
      "mocks" | "addTypename" | "defaultOptions" | "cache" | "resolvers"
    >
  ) => {
    return renderer(<BrowserRouter>{node}</BrowserRouter>, options);
  };

export const renderWithRouter = renderWithRouterGenerator(render);

export const renderApolloWithRouter = renderWithRouterGenerator(renderApollo);

export * from "@testing-library/react";
export { renderApollo };
