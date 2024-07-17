export const useMap = () => {
  async function initMap() {
    await ymaps3.ready;

    const { YMap, YMapDefaultSchemeLayer } = ymaps3;

    const map = new YMap(document.getElementById('map'), {
      location: {
        center: [16.403003, 26.90501],
        zoom: 2,
      },
    });

    map.addChild(new YMapDefaultSchemeLayer());

    const layer = new YMapDefaultSchemeLayer({
      customization: [
        {
          tags: {
            all: ['landcover'],
          },
          types: ['polygon']['polyline '],
          stylers: [
            {
              color: '#a7a7a7',
            },
          ],
        },
        {
          tags: {
            all: ['water'],
          },
          stylers: [
            {
              color: '#ffffff',
            },
          ],
        },
        {
          elements: 'label',
          stylers: [
            {
              visibility: 'off',
            },
          ],
        },
      ],
    });
    map.addChild(layer);
  }
  initMap();
};
