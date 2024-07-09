# Easy Text Input

This project provides a simple and easy-to-use text input component for front-end development. 

## API

The text input component exposes the following API:

- `value`: The current value of the input.
- `onChange`: A callback function triggered when the input value changes.
- `placeholder`: An optional placeholder text to display when the input is empty.

To use the text input component, simply import it into your project and pass the necessary props. Here's an example:

```jsx
import TextInput from 'easy-text-input';

function App() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <h1>Easy Text Input Example</h1>
      <TextInput
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter your text here"
      />
    </div>
  );
}
```

Feel free to customize the component according to your project's needs.
