import { defineConfig } from 'astro/config';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  integrations: [
    icon({
      svgoOptions: {
        plugins: [
          // Without cleanupIds things work, but this is an optimisation which I do want
          // 'cleanupIds',


          // This one generates a new prefix for each occurance of the ID - so
          // an ID might be defined in one place in an SVG, and referenced
          // somewhere else within the same SVG. But the ID will be different
          // each time, so the references are broken, and the unused ID attributes
          // then get stripped out altogether.
          //
          // This is enough to break each icon individually, even ignoring interactions
          // between the two of them.
          // {
          //   name: 'prefixIds',
          //   params: {
          //     prefix() {
          //       this.counter = this.counter || 0;
          //       return `id-${this.counter++}`;
          //     }
          //   },
          // },

          // Using a static prefix is enough to fix each icon individually, but obviously
          // is basically the same as not prefixing at all.
          // {
          //   name: 'prefixIds',
          //   params: {
          //     prefix() {
          //       return `foobar`;
          //     }
          //   },
          // },
        ]
      },
    }),
  ],
});
