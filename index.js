const { Telegraf } = require('telegraf')

const bot = new Telegraf(process.env.BOT_TOKEN)

dp.message_handler(commands="start")
  cmd_start(message  )
    keyboard = types.ReplyKeyboardMarkup(resize_keyboard=True)
    buttons = ["С пюрешкой", "Без пюрешки"]
    keyboard.add(buttons)
    await message.answer("Как подавать котлеты?", reply_markup=keyboard)

bot.command('z', (ctx) => ctx.reply('Hello'))
bot.command('hipster', Telegraf.reply('λ'))
bot.command('menu', Telegraf.reply('😍'))
bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))