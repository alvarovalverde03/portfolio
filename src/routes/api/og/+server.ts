import satori from 'satori'
import { html } from 'satori-html'
import { Resvg } from '@resvg/resvg-js'
import OgCard from '$lib/components/og-card.svelte'

const height = 400
const width = 800

const inter = await fetch('https://alvarovalverde.dev/fonts/Inter-Bold.ttf').then((res) =>
    res.arrayBuffer()
)

/** @type {import('./$types').RequestHandler} */
export const GET = async () => {
    const html = {
        type: 'div',
        props: {
        children: 'Alvaro Valverde ello, world',
        style: {color: 'red'}
        }
    }

    const svg = await satori(html, {
        fonts: [
            {
                name: 'Inter',
                data: inter,
                style: 'normal'
            }
        ],
        height, 
        width
    })

    const resvg = new Resvg(svg, {
        fitTo: {
          mode: 'width',
          value: width
        }
    })

    const img = resvg.render();

    return new Response(img.asPng(), {
        headers: {
          'content-type': 'image/png'
        }
    })
}