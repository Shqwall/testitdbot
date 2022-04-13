const { Telegraf, Markup } = require('telegraf')

const bot = new Telegraf(process.env.BOT_TOKEN)

bot.command('z', (ctx) => ctx.reply('Hello'))
bot.command('hipster', Telegraf.reply('λ'))
bot.command('menu', Telegraf.reply('😍'))
bot.command('mm', (ctx) => {

    ctx.replyWithHTML('<b>Курсы</b>', Markup.inlineKeyboard(
        [
            [Markup.button.callback('Пиццы', 'bnt_1'), Markup.button.callback('Комбо', 'bnt_2')]
        ]
    ))
})
bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))