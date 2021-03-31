import { writable } from 'svelte/store'

export default writable({
  blogs: [
    {
      id: '1',
      title: 'The wave crashed',
      content: 'The wave crashed and hit the sandcastle head-on. The sandcastle began to melt under the waves force and as the wave receded, half the sandcastle was gone. The next wave hit, not quite as strong, but still managed to cover the remains of the sandcastle and take more of it away. The third wave, a big one, crashed over the sandcastle completely covering and engulfing it. When it receded, there was no trace the sandcastle ever existed and hours of hard work disappeared forever.'
    },
    {
      id: '2',
      title: `I've rented a car in Las Vegas`,
      content: `I've rented a car in Las Vegas and have reserved a hotel in Twentynine Palms which is just north of Joshua Tree. We'll drive from Las Vegas through Mojave National Preserve and possibly do a short hike on our way down. Then spend all day on Monday at Joshua Tree. We can decide the next morning if we want to do more in Joshua Tree or Mojave before we head back.`
    }
  ]
})