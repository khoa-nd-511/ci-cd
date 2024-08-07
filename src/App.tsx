import { useState } from "react";

import { Button } from "@/components/ui/button";

const App = () => {
    const [count, setCount] = useState(0);
    return (
        <main className="w-full min-h-screen flex">
            <section className="mx-auto mt-10">
                <h1 className="text-6xl font-bold text-blue-500">
                    Hello World
                </h1>
                <Button
                    variant="outline"
                    className="mt-5"
                    onClick={() => setCount((c) => c + 1)}
                >
                    Click me: {count}
                </Button>
            </section>
        </main>
    );
};

export default App;
