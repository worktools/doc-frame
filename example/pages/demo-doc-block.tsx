import React, { FC } from "react";
import { css } from "@emotion/css";
import DocBlock from "../../src/doc-block";

let content = `
this is a post \`console.log("very good")\`

\`\`\`ts
demo

return <div></div>
\`\`\`

http://fe.jimu.io

`;

let DemoDocBlock: FC<{}> = React.memo((props) => {
  /** Methods */
  /** Effects */
  /** Renderers */
  return (
    <div>
      <DocBlock content={content}></DocBlock>

      <DocBlock content="sdsdfsdf" embed></DocBlock>
    </div>
  );
});

export default DemoDocBlock;
