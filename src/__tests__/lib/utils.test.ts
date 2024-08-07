import { cn } from "@/lib/utils";

describe("utils", () => {
    describe("cn", () => {
        test("should merge strings", () => {
            expect(cn("a", "b")).toEqual("a b");
        });

        test("should merge strings if true", () => {
            expect(
                cn("a", {
                    b: true,
                }),
            ).toEqual("a b");
        });

        test("should not merge strings if false", () => {
            expect(
                cn("a", {
                    b: false,
                }),
            ).toEqual("a");
        });
    });
});
