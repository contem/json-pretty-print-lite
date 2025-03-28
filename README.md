# 🧾 json-pretty-print-lite

Lightweight utility to pretty-print JSON data in the terminal — with optional **colors** and **indentation**.

Ideal for CLI tools, logs, debugging, or printing deeply nested objects clearly.

---

## 📦 Installation

### Using npm

```bash
npm install json-pretty-print-lite
```

### Using yarn

```bash
yarn add json-pretty-print-lite
```

---

## 🚀 Usage

```js
const prettyPrint = require("json-pretty-print-lite");

const data = {
  name: "Yunus",
  age: 28,
  tech: ["Node.js", "Vue.js"],
  address: {
    city: "Amasya",
    country: "Türkiye"
  }
};

// Colored output (default)
prettyPrint(data);

// Non-colored output with 4-space indentation
prettyPrint(data, false, 4);
```

---

## ⚙️ Options

| Parameter | Type      | Default | Description                                      |
|-----------|-----------|---------|--------------------------------------------------|
| `data`    | `object`  | –       | The JSON-compatible object to print              |
| `color`   | `boolean` | `true`  | Whether to use colored output in the terminal    |
| `indent`  | `number`  | `2`     | Number of spaces for indentation (if no color)   |

---

## 📤 Output Example

**Colored Output:**

```bash
{
  name: 'Yunus',
  age: 28,
  tech: [ 'Node.js', 'Vue.js' ],
  address: { city: 'Amasya', country: 'Türkiye' }
}
```

**Non-Colored Output:**

```json
{
  "name": "Yunus",
  "age": 28,
  "tech": [
    "Node.js",
    "Vue.js"
  ],
  "address": {
    "city": "Amasya",
    "country": "Türkiye"
  }
}
```

---

## 🧪 Run Test

```bash
node test.js
```

---

## 🪪 License

```
MIT
```
