import React, { useState, createContext, useContext } from "react";

import { Transition } from "react-transition-group";

const Store = createContext();

const Storeprovider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const contextValue = {
    open,
    value,
    setOpen,
    setValue,
  };

  return <Store.Provider value={contextValue}>{children}</Store.Provider>;
};

const Icon = ({ open }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="150"
      height="150"
      viewBox="0 0 150 150"
    >
      <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
        <g fill={open ? "#2c3e50" : "#718093"} transform="translate(-25 -25)">
          <Transition in={open} timeout={500}>
            {(state) => (
              <>
                <g transform="translate(25 25)">
                  <rect
                    id="r1"
                    width="24"
                    height="150"
                    x="63"
                    y="0"
                    rx="12"
                    transform={`rotate(${open ? "-45" : "0"} 75 75)`}
                    style={{ transition: "all 0.3s ease-in-out" }}
                  ></rect>
                  <rect
                    id="r2"
                    width="24"
                    height="150"
                    x="63"
                    y="0"
                    rx="12"
                    transform={`rotate(${open ? "45" : "90"} 75 75)`}
                    style={{ transition: "all 0.3s ease-in-out" }}
                  ></rect>
                </g>
              </>
            )}
          </Transition>
        </g>
      </g>
    </svg>
  );
};

const TreeSelect = ({ children, placeholder }) => {
  const { open, setOpen, value } = useContext(Store);
  return (
    <div id="three-select" onMouseLeave={() => setOpen(false)}>
      <div id="tree-select-base">
        <input
          type="text"
          readonly="true"
          placeholder={placeholder ? placeholder : ""}
          value={value}
          onFocus={() => setOpen(true)}
          onClick={() => setOpen(true)}
        ></input>
        <div id="drop-button" onClick={() => setOpen(!open)}>
          <Icon open={open} />
        </div>
      </div>
      <Transition in={open} timeout={500}>
        {(state) => (
          <>
            <div
              style={{
                transform:
                  state === "entering" || state === "entered"
                    ? "scaleY(1)"
                    : "scaleY(0)",
                transition: "all 0.3s ease",
                transformOrigin: "top",
              }}
              id="three-drop-base"
              onMouseEnter={() => setOpen(true)}
              onMouseLeave={() => setOpen(false)}
            >
              {children}
            </div>
          </>
        )}
      </Transition>
    </div>
  );
};

const Node = ({ children, title }) => {
  const { setValue } = useContext(Store);
  const [nodeOpen, setNodeopen] = useState(false);
  return (
    <div id="node">
      <div id="tree-node-header">
        <div id="icon" onClick={() => setNodeopen(!nodeOpen)}>
          {nodeOpen ? "+" : "-"}
        </div>
        <div id="title" onClick={() => setNodeopen(!nodeOpen)}>
          {title}
        </div>
      </div>

      {nodeOpen && (
        <div id="tree-node-body">
          {children
            ? children.map((child, i) => {
                return (
                  <li
                    id="child-list"
                    onClick={() => setValue(child.props.children)}
                  >
                    {child}
                  </li>
                );
              })
            : "no"}
        </div>
      )}
    </div>
  );
};

const Child = ({ children }) => {
  return <>{children}</>;
};

function TreeSelectInput() {
  return (
    <Storeprovider>
      <div id="layout">
        <div id="component-base">
          <TreeSelect placeholder="Select your favourite vehicle">
            <Node title="cars">
              <Child>Aston Martin</Child>
              <Child>Audi</Child>
              <Child>BMW</Child>
              <Child>Ford</Child>
            </Node>
            <Node title="vans">
              <Child>Alfa Romeo AR6</Child>
              <Child>GMC Safari</Child>
              <Child>Fiat 242</Child>
              <Child>Ford Galaxy</Child>
            </Node>
            <Node title="planes">
              <Child>MiG-21 fighter</Child>
              <Child>F-16 Fighting Falcon</Child>
              <Child>MiG-21 fighter</Child>
              <Child>P-51 Mustang</Child>
            </Node>
          </TreeSelect>
        </div>
      </div>
    </Storeprovider>
  );
}

export default TreeSelectInput;
