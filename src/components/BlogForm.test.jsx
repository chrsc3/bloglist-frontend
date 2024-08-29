import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import BlogForm from "../components/BlogForm";

test("calls the event handler with correct details when a new blog is created", async () => {
  const createBlog = vi.fn();
  const user = userEvent.setup();
  const component = render(<BlogForm createBlog={createBlog} />);

  const titleInput = component.container.querySelector(".title");
  const authorInput = component.container.querySelector(".author");
  const urlInput = component.container.querySelector(".url");
  const sendButton = component.getByText("save");

  await user.type(titleInput, "Test Blog");
  await user.type(authorInput, "John Doe");
  await user.type(urlInput, "https://example.com");
  await user.click(sendButton);

  expect(createBlog).toHaveBeenCalledWith({
    title: "Test Blog",
    author: "John Doe",
    url: "https://example.com",
  });
});
