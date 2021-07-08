import Blocks from 'editorjs-blocks-react-renderer';
import ReactHtmlParser from 'react-html-parser';

const data = {
  "time": 1625659569338,
  "blocks": [{
    "id": "ts6TuvTA8H",
    "type": "header",
    "data": {
      "text": "Test 1 2 3",
      "level": 1
    }
  }, {
    "id": "55vIocGUvV",
    "type": "header",
    "data": {
      "text": "fewfewf<mark class=\"cdx - marker \">ewfew</mark>",
      "level": 2
    }
  }, {
    "id": "xDYvLb1loi",
    "type": "paragraph",
    "data": {
      "text": "gerjlagre"
    }
  }, {
    "id": "8d1OK1cLJa",
    "type": "image",
    "data": {
      "file": {
        "url": "/images/vercel.svg"
      },
      "caption": "",
      "withBorder": false,
      "stretched": false,
      "withBackground": false
    }
  }],
  "version": "2.22.0"
};

const defaultConfigs = {
  code: {
    className: "w-full bg-gray-100 rounded-sm"
  },
  delimiter: {
    className: ""
  },
  embed: {
    className: "styled-iframe",
    rel: "noreferer nofollower external", // Generates an <a> if not able to receive an "embed" property
    sandbox: undefined
  },
  header: {
    className: "my-3"
  },
  image: {
    className: "flex justify-center my-6",
    actionsClassNames: {
      stretched: "image-block--stretched",
      withBorder: "image-block--with-border",
      withBackground: "image-block--with-background",
    }
  },
  list: {
    className: ""
  },
  paragraph: {
    className: ""
  },
  quote: {
    className: "",
    actionsClassNames: {
      alignment: "text-align-{alignment}", // This is a substitution placeholder: left or center.
    }
  },
  table: {
    className: "table"
  }
}

function HeadingLevel({level, classNames, payload}) {
  switch (level) {
    case 1:
      return <h1 className={classNames + " text-3xl"}>{payload}</h1>;
    case 2:
      return <h2 className={classNames + " text-2xl"}>{payload}</h2>;
    case 3:
      return <h3 className={classNames + " text-xl"}>{payload}</h3>;
    case 4:
      return <h4 className={classNames}>{payload}</h4>;
    case 5:
      return <h5 className={classNames}>{payload}</h5>;
    case 6:
      return <h6 className={classNames}>{payload}</h6>;

  }
}

const CustomHeader = ({data, className = ""}) => {
  return (
      <>
        {/*{data?.items.map((item, i) => (*/}
        <HeadingLevel level={data.level} classNames={className} payload={data?.text && ReactHtmlParser(data.text)}/>
        {/*))}*/}
      </>
  )
}

const Blog = () => (
    <div>
      <Blocks data={data} config={defaultConfigs} renderers={{header: CustomHeader}}/>
    </div>
);

export default Blog;
