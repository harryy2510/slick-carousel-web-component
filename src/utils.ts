import { VNode } from "preact";

export function toChildren(input: any): VNode[] {
  return (
    input
      .type?.()
      ?.props?.children?.filter(
        (child: any) => child && typeof child === "object" && child?.type,
      ) ?? []
  );
}
