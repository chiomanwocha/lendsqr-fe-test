import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import Login from "..";

const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("Login Component", () => {
  it("renders login form correctly", () => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );

    expect(screen.getByPlaceholderText("Email")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Password")).toBeInTheDocument();
    expect(screen.getByText("LOG IN")).toBeInTheDocument();
    expect(screen.getByText("Forgot PASSWORD?")).toBeInTheDocument();
  });

  it("disables login button for invalid inputs", () => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );

    const loginButton = screen.getByText("LOG IN") as HTMLButtonElement;
    expect(loginButton).toBeDisabled();
  });

  it("enables login button for valid inputs", () => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );

    fireEvent.change(screen.getByPlaceholderText("Email"), {
      target: { value: "test@example.com" },
    });
    fireEvent.change(screen.getByPlaceholderText("Password"), {
      target: { value: "12345" },
    });

    const loginButton = screen.getByText("LOG IN") as HTMLButtonElement;
    expect(loginButton).not.toBeDisabled();
  });

  it("navigates to '/users' on form submission", async () => {
    const mockNavigate = jest.fn();
    jest.mock("react-router", () => ({
      useNavigate: () => mockNavigate,
    }));

    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );

    fireEvent.change(screen.getByPlaceholderText("Email"), {
      target: { value: "test@example.com" },
    });
    fireEvent.change(screen.getByPlaceholderText("Password"), {
      target: { value: "12345" },
    });

    fireEvent.submit(screen.getByTestId("form"));

    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledWith("/users");
    });
  });
});
