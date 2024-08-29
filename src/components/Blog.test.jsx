import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Blog from "./Blog";

test("renders content", () => {
  const blog = {
    title: "Component Testing",
    author: "John Doe",
    url: "https://example.com",
    likes: 10,
  };

  render(<Blog blog={blog} />);

  screen.debug();
});
test("renders blog title and author, but not URL or likes by default", () => {
  const blog = {
    title: "Component Testing",
    author: "John Doe",
    url: "https://example.com",
    likes: 10,
  };
  render(<Blog blog={blog} />);

  const titleElement = screen.getByText(/Component Testing/i);
  const authorElement = screen.getByText(/John Doe/i);
  const urlElement = screen.queryByText(/https:\/\/example.com/i);
  const likesElement = screen.queryByText(/10/i);

  expect(titleElement).toBeInTheDocument();
  expect(authorElement).toBeInTheDocument();
  expect(urlElement).not.toBeInTheDocument();
  expect(likesElement).not.toBeInTheDocument();
});

test("clicking the button Show", async () => {
  const blog = {
    title: "Component Testing",
    author: "John Doe",
    url: "https://example.com",
    likes: 10,
  };

  const mockHandler = vi.fn();

  render(<Blog blog={blog} toggleImportance={mockHandler} />);

  const user = userEvent.setup();
  const button = screen.getByText("show");
  await user.click(button);

  const titleElement = screen.getByText(/Component Testing/i);
  const authorElement = screen.getByText(/John Doe/i);
  const urlElement = screen.queryByText(/https:\/\/example.com/i);
  const likesElement = screen.queryByText(/10/i);

  expect(titleElement).toBeInTheDocument();
  expect(authorElement).toBeInTheDocument();
  expect(urlElement).toBeInTheDocument();
  expect(likesElement).toBeInTheDocument();
});
test("clicking the like button twice calls the event handler twice", async () => {
  const blog = {
    title: "Component Testing",
    author: "John Doe",
    url: "https://example.com",
    likes: 10,
  };

  const mockHandler = vi.fn();

  render(<Blog blog={blog} updateBlogLikes={mockHandler} />);
  const user = userEvent.setup();
  const buttonshow = screen.getByText("show");
  await user.click(buttonshow);

  const likeButton = screen.getByText("Like");

  await user.click(likeButton);
  await user.click(likeButton);

  expect(mockHandler).toHaveBeenCalledTimes(2);
});
