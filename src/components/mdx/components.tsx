import Image from 'next/image';
import { Pre, RawCode, highlight } from "codehike/code";
import "@/style/github_from_css.css"
import { AnnotationHandler, InnerLine } from "codehike/code"
import { SiJavascript, SiTypescript, SiPython, SiReact, SiHtml5, SiCss, SiJson, SiMarkdown, SiCplusplus } from "react-icons/si";
import { VscTerminal } from "react-icons/vsc";

function CodeIcon({ lang }: { lang: string }) {
    switch (lang) {
        case "js":
        case "javascript":
            return <SiJavascript className="text-yellow-400" />;
        case "ts":
        case "typescript":
            return <SiTypescript className="text-blue-400" />;
        case "jsx":
        case "tsx":
            return <SiReact className="text-cyan-400" />;
        case "python":
        case "py":
            return <SiPython className="text-yellow-500" />;
        case "html":
            return <SiHtml5 className="text-orange-500" />;
        case "css":
            return <SiCss className="text-blue-500" />;
        case "json":
            return <SiJson className="text-gray-400" />;
        case "cpp":
        case "hpp":
            return <SiCplusplus className="text-blue-400" />;
        case "md":
        case "mdx":
        case "markdown":
            return <SiMarkdown className="text-zinc-200" />;
        case "bash":
        case "sh":
        case "shell":
        case "zsh":
            return <VscTerminal className="text-zinc-100" />;
        default:
            return <VscTerminal className="text-zinc-400" />;
    }
}

const lineNumbers: AnnotationHandler = {
  name: "line-numbers",
  Line: (props) => {
    const width = props.totalLines.toString().length + 1
    return (
      <div className="flex">
        <span
          className="text-right opacity-50 select-none"
          style={{ minWidth: `${width}ch` }}
        >
          {props.lineNumber}
        </span>
        <InnerLine merge={props} className="flex-1 pl-2" />
      </div>
    )
  },
}

export async function MyCode({ codeblock }: { codeblock: RawCode }) {
    const highlighted = await highlight(codeblock, "github-from-css");
    
    return (
        <div 
            className="rounded-md shadow-shadow-nord shadow-xl overflow-hidden my-4"
            style={highlighted.style}
        >
            {highlighted.meta && (
                <div className="flex items-center gap-2 px-4 py-2 text-sm bg-surface-hover">
                    <CodeIcon lang={highlighted.lang} />
                    <span>{highlighted.meta}</span>
                </div>
            )}
            <div className="">
                <Pre code={highlighted} handlers={[lineNumbers]} className='m-0! p-0!'/>
            </div>
        </div>
    );
}

export const mdxComponents: Record<string, any> = {
    img: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
        <Image
            src={props.src as string}
            alt={props.alt ?? ''}
            width={800}
            height={0}
            style={{ height: 'auto', width: '100%' }}
            unoptimized
        />
    ),
    MyCode,
};
