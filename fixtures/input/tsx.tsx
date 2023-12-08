interface Props {
  foo: number
  bar: string
  a: number
  b: string
}

export function Component1({foo, bar, a ,
b}:Props) {
  return <div>
    {foo}
    {bar}
    {a}{b}
    </div>;
}

export function jsx2() {
  const props = {a:1,
  b:2}
  return < a >
     <div {...props }
     >Inline Text</div>
    <Component1  foo= 'bar' bar={`foo` } 
    a={1}
    b="2">
      Block Text
      </Component1>
      <div>
        Mixed
            <div>Foo</div>
          Text<b > Bar</b>
        </div>
        <p>
          foo<i>bar</i><b>baz</b>
        </p>
      </ a >
}
