/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import { Post } from "./Post";
import { ToDo } from "./Todo";
import { ExampleChildren } from "./exampleChildren";
import arrayTodo from "./todos.json";

export const App = () => {
  const text =
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed commodi laborum officiis maiores dolorum facilis quibusdam aut voluptates. Quisquam corporis animi odio pariatur rem ab doloremque officiis expedita consequatur autem.";
  (
    <>
      <Post
        title="Hello world"
        text={text}
        marked>
        <img src="https://placeholder.com/300x300" />
        </Post>
      <ToDo
        title="new todo"
        description="Lorem ipsum dolor sit amet consectetur"
        done
      ></ToDo>
      <ToDo
        title="new new todo"
        description="Lorem ipsum dolor sit amet consectetur"
      ></ToDo>
      <ExampleChildren>
        Hello World!!!!!!!
      </ExampleChildren>

    
    </>
    );
    const todosElements = arrayTodo.map(({ title, completed }) => <ToDo title={title} done={completed} />);
    return todosElements;
  
};
