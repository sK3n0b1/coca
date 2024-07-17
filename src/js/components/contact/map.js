export const useMap = () => {
  async function initMap() {
    await ymaps3.ready;

    const { YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer } = ymaps3;
    const { YMapDefaultMarker } = await ymaps3.import('@yandex/ymaps3-markers@0.0.1');

    const map = new YMap(document.getElementById('map'), {
      location: {
        center: [16.403003, 26.90501],
        zoom: 2,
      },
    });

    const featuresLayer = new YMapDefaultFeaturesLayer();
    map.addChild(featuresLayer);

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

    map.addChild(
      new YMapDefaultMarker({
        coordinates: [130, -25],
        title: 'Yogja, INA',
        subtitle: '100 Smith Street<br>Collingwood VIC 3066 AU',
        color: 'blue',
      }),
    );
  }

  initMap();
};
