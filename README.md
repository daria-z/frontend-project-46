# 🌟 Вычислитель отличий 🌟

[![Actions Status](https://github.com/daria-z/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/daria-z/frontend-project-46/actions) [![Maintainability](https://api.codeclimate.com/v1/badges/da069ed58cbf798bf6d1/maintainability)](https://codeclimate.com/github/daria-z/frontend-project-46/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/da069ed58cbf798bf6d1/test_coverage)](https://codeclimate.com/github/daria-z/frontend-project-46/test_coverage)


Консольное приложение, которое определяет разницу между содержанием двух файлов. Программа поддерживает форматы JSON и YAML и предоставляет результаты в трех форматах вывода: stylish, plain и json.

## 🛠 Для работы с проектом
###  ⚙️ Makefile

| Команда           | Описание                                   |
|------------------|-------------------------------------------|
| `install` | устанавливает зависимости                      |
| `lint`  | запускает ESLint для проверки кода |
| `test` | запускаеи тесты                      |
| `test-coverage`  | тесты и покрытие кода |


## 📂 Структура проекта

```
📦 frontend-project-46
├── 📁 __fixtures__
├── 📁 __tests__
├── 📁 bin
│   └── 📄 gendiff
└── 📁 src
    ├── 📁 formatters
    ├── 📄 fileReader.js      # чтение файлов
    ├── 📄 findDiff.js        # логика поиска различий
    ├── 📄 gendiff.js
    ├── 📄 gendiffCli.js
    └── 📄 parsers.js
```

## 🚀 Использование

### Синтаксис команды

```bash
gendiff [output format] <path1> <path2>
```

### Опции

| Опция           | Описание                                   |
|------------------|-------------------------------------------|
| `-V, --version` | выводит номер версии                      |
| `-f, --format`  | задает формат вывода (по умолчанию: stylish) |

### Пример

[![asciicast](https://asciinema.org/a/PTdYf4oy3hHRmLcTlsb7wt7cV.svg)](https://asciinema.org/a/PTdYf4oy3hHRmLcTlsb7wt7cV)

#### Сравнение файлов с выводом в plain формате:
```bash
gendiff -f plain file1.json file2.json
```
#### В формате JSON:
```bash
gendiff -f json file1.yaml file2.yaml
```


