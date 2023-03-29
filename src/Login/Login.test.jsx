import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import matchers from "@testing-library/jest-dom/matchers";

import Login from "./Login";

expect.extend(matchers);

describe("Login test", () => {
  afterEach(cleanup);

  it("espero que se renderize el titulo", () => {
    render(<Login />);
    screen.getByText("Este es el formular login");
  });

  it("espero que el onChange funcione", () => {
    render(<Login />);
    let inputName = screen.getByPlaceholderText("Ingrasa tu nombre");
    expect(inputName).toHaveValue("");
    fireEvent.change(inputName, { target: { value: "juan" } });
    expect(inputName).toHaveValue("juan");
  });
});
