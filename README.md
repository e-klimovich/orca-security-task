# Orca Security Task

## Start

First of all `node v14.13.0` should be insalled

1. `yarn` to install dependecies
2. `yarn start` to run development mode

## Task description

Задание заключается в создании таск менеджера.

Есть следующие сущности:

Process
```
id: String
name: String
startTime: Number
jobsCount: Number
```

Job

```
id: String
processId: String
name: String
status: Enum [running, successed, failed]
```

### Необходимо реализовать следующий функционал:

- просмотр списка процессов
- просмотр списка джоб каждого из процессов
- создание нового процесса
- сортировка процессов по всем полям (кроме ID)
- поиск джобы по имени
- удаление процесса, включая все его джобы

### Создание процесса:

- новый процесс создаётся с абсолютно рандомными полями
- вместе с ним создаётся случайное количество джоб (от 1 до 10)
- статус джоб также рандомный
- процесс должен отображать общий статус джоб: все успешные - процесс успешен; все завершены с ошибкой - процесс с ошибкой; хоть одна джоба запущена - весь процесс in progress.

Клиент должен постоянно запрашивать обновления (например, раз в 10 минут). Особых требований нет, хоть вебсокеты, хоть обычный поллинг.

### Требования к бэкенду:

Можно использовать всё, что угодно. Хоть АПИ на ноде с БД, хоть простой адаптер на клиенте с сохранением в локалсторадж.

### Требования к фронтенду:

- необходимо использовать сязку React+Redux (мы дополнительно используем redux-toolkit, но это по желанию)
- в идеале использовать redux-saga для сайд-эффектов
- редакс-сущности (саги, селекторы, редьюсеры) должны быть покрыты тестами
- стилизация компонентов через styled-components

> Полученный результат просим прислать в виде ссылке на Githab с историей комитов