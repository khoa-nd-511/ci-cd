import App from "@/App";
import { render } from "@/test-utils";

describe("<App/ >", () => {
    test("should render properly", async () => {
        const { user, getByRole, getByText } = render(<App />);

        expect(getByText(/hello world/i)).toBeDefined();
        expect(getByRole("button", { name: /^click me/i })).toHaveTextContent(
            "Click me: 0",
        );

        await user.click(getByRole("button", { name: /^click me/i }));

        expect(getByRole("button", { name: /^click me/i })).toHaveTextContent(
            "Click me: 1",
        );
    });
});
