# Base Conversor

Base Conversor is a web application that allows users to convert numbers between different bases: decimal, binary, octal, and hexadecimal. This project is built using TypeScript and is designed to be a static site, making it easy to host on platforms like GitHub Pages.

## Features

- Convert from decimal to binary, octal, or hexadecimal.
- Convert from binary to decimal, octal, or hexadecimal.
- Convert from octal to decimal, binary, or hexadecimal.
- Convert from hexadecimal to decimal, binary, or octal.

## Project Structure

```
base-converter
├── src
│   ├── index.ts          # Main entry point of the application
│   └── styles
│       └── main.css      # Styles for the application
├── public
│   └── index.html        # Main HTML document
├── .github
│   └── copilot-instructions.md # Instructions for GitHub Copilot
├── package.json          # npm configuration file
├── tsconfig.json         # TypeScript configuration file
├── vite.config.ts        # Vite configuration file
└── README.md             # Project documentation
```

## Getting Started

To get started with the Base Conversor project, follow these steps:

1. **Clone the repository:**

   ```
   git clone https://github.com/yourusername/base-converter.git
   cd base-converter
   ```

2. **Install dependencies:**

   ```
   npm install
   ```

3. **Run the development server:**

   ```
   npm run dev
   ```

4. **Open your browser and navigate to:**
   ```
   http://localhost:3000
   ```

## Usage

Once the application is running, you can input a number in one base and select the target base for conversion. The application will display the converted number in real-time.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.
