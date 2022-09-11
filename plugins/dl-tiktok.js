import { tiktokdl, tiktokdlv2, tiktokdlv3 } from '@bochilteam/scraper'
import fetch from 'node-fetch'

let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw `Use example ${usedPrefix}${command} https://www.tiktok.com/@omagadsus/video/7025456384175017243`
    const { author: { nickname }, video, description } = await tiktokdl(args[0])
        .catch(async _ => await tiktokdlv2(args[0]))
        .catch(async _ => await tiktokdlv3(args[0]))
    const url = video.no_watermark2 || video.no_watermark || 'https://tikcdn.net' + video.no_watermark_raw || video.no_watermark_hd
    if (!url) throw 'Can\'t download video!'
    conn.sendHydrated(m.chat, `${htki} с┤Ы╔кс┤Лс┤Ыс┤Пс┤Л с┤бс┤Н ${htka}`, `тЮФ ╔┤╔кс┤Дс┤Л╔┤с┤Ас┤Нс┤З ${nickname}${description ? `\nтЮФ с┤Ес┤Зsс┤Д╩А╔кс┤Шс┤Ы╔кс┤П╔┤:\n${description}` : ''}`, await (await fetch(url)).buffer(),
        url, 'ЁЯМО s с┤П с┤Ь ╩А с┤Д с┤З', null, null, [
        ['с┤Ес┤П╔┤с┤АъЬ▒╔к', `.donasi`],
        ['с┤Ас┤Ьс┤Е╔кс┤П', `.tiktokaudio ${args}`],
        [null, null]], m)
}
handler.help = ['tiktok', 'tiktok', 'tiktokdl'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(tik(tok)?(tok)?(dl)?)$/i

export default handler
