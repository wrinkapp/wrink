import Sidebar from "@/components/sidebar";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <ResizablePanelGroup direction="horizontal">
            <ResizablePanel defaultSize={15} minSize={12} maxSize={25}>
                <Sidebar />
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel defaultSize={85}>{children}</ResizablePanel>
        </ResizablePanelGroup>
    );
}
