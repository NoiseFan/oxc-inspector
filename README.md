# Oxidation Compiler Config Inspector(oxc-inspector)

A visual tool for inspecting and understanding your oxlint and oxfmt config.

<img width="3600" height="2252" alt="Screenshot" src="https://github.com/user-attachments/assets/d5c85295-2f9b-4bb6-a215-e041ac3934f8" />
<img width="3600" height="2252" alt="Screenshot" src="https://github.com/user-attachments/assets/1710d825-833c-41b8-99b7-95e6c0ed66bb" />
<img width="3600" height="2252" alt="Screenshot" src="https://github.com/user-attachments/assets/67525470-2302-4701-8f60-f3d5cf1710f7" />

## Usage

### Local Development

Run in your project root directory containing `.oxlintrc.json`:

```bash
npx oxrc-inspector
```

Visit http://localhost:7777 to view your configuration.

### Static Build

Generate static pages (output to `.oxrc-inspector` directory):

```bash
npx oxrc-inspector build
```

## License

MIT License

## Acknowledgments

This project is inspired by and built upon the excellent work of:

- **[eslint/config-inspector](https://github.com/eslint/config-inspector)** - For providing the foundational concept and implementation of ESLint configuration inspection
- **[Oxc](https://github.com/oxc-project/oxc)** - For providing the powerful oxlint and oxfmt tools that this project visualizes and helps understand
