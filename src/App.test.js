import React from "react";
import { fireEvent, render, waitForElement} from '@testing-library/react'
import movie from '../services/api'
import App from "../src/App";

describe("test input", () => {
  it("should recevei new value", async () => {
    const { getByTestId } = render(<App />);

    const fieldNode = await waitForElement(() => getByTestId('form-field'))

    fireEvent.change(fieldNode, { target: { value: 'testing'}})

    expect(fieldNode.value).toEqual('testing')

  });
});

describe("test button", () => {
  it("should receive on click", async () => {
    const { getByTestId } = render(<App />);

    const fieldBtn = await waitForElement(() => getByTestId('form-btn'))

    fireEvent.click(fieldBtn)
  });
});

describe('test api query movies', () => {
  it('should success in the promise', async () => {

    const idMovie = "454626"

    const response = await movie.get(`${idMovie}?api_key=c33dbcaeb60558d976871a76e9ab3104`);
    console.log(response)
    expect(response.status).toEqual(200)
  })
})