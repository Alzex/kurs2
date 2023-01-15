# Lebovsky Telegram Bot

Телеграм бот для менеджмента боргів у групі.

> **Warning**  
> CURRENTLY IN WIP STATE

## Команди
- `/start` - запуск бота
- `/help` - допомога
- `/create_group <group_name>` - створення групи
- `/invite_to_group <group_name> <user_name>` - запрошення користувача до групи
- `/leave_group <group_name>` - вихід з групи
- `/delete_group <group_name>` - видалення групи
- `/list_groups` - список груп
- `/list_gsers <group_name>` - список користувачів в групі
- `/get_owes <group_name>` - список боргів в групі
- `/add_owe <group_name> <user_name> <amount>` - додати борг
- `/remove_owe <group_name> <user_name> <amount>` - видалити борг
- `/clear_owes <group_name>` - очистити список боргів
- `/get_my_owe <group_name>` - баланс користувача в групі

## Вимоги

- Node.js 16.0+
- npm
- MongoDB 
- telegraf

## Установка

1. Склонуйте репозиторій
2. Встановіть залежності `npm install`
3. Створити `.env` файл з наступними змінними
```env
TOKEN=Токен бота

MONGO_URI=URI до MongoDB
MONGO_DB=Ім'я бази даних
```
4. Запустіть бота `npm start`
