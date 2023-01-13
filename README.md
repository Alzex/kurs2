# Lebovsky Telegram Bot

Телеграм бот для менеджмента боргів у групі.

> **Warning**  
> CURRENTLY IN WIP STATE.

## Команди
- `/start` - запуск бота
- `/help` - допомога
- `/createGroup <group_name>` - створення групи
- `/inviteToGroup <group_name> <user_name>` - запрошення користувача до групи
- `/leaveGroup <group_name>` - вихід з групи
- `/deleteGroup <group_name>` - видалення групи
- `/listGroups` - список груп
- `/listUsers <group_name>` - список користувачів в групі
- `/getOwes <group_name>` - список боргів в групі
- `/addOwe <group_name> <user_name> <amount>` - додати борг
- `/removeOwe <group_name> <user_name> <amount>` - видалити борг
- `/clearOwes <group_name>` - очистити список боргів
- `/getMyOwe <group_name>` - баланс користувача в групі

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
