import { render, RenderOptions } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { PropsWithChildren, ReactNode } from "react";

const AllTheProviders = ({ children }: PropsWithChildren) => {
    return <>{children}</>;
};

const customRender = (ui: ReactNode, options: RenderOptions = {}) => ({
    user: userEvent.setup(),
    ...render(ui, { wrapper: AllTheProviders, ...options }),
});
// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };
