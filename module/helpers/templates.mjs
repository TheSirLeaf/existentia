/**
 * Define a set of template paths to pre-load
 * Pre-loaded templates are compiled and cached for fast access when rendering
 * @return {Promise}
 */
export const preloadHandlebarsTemplates = async function () {
  return loadTemplates([
    // Actor partials.
    'systems/existentia/templates/actor/parts/actor-features.hbs',
    'systems/existentia/templates/actor/parts/actor-items.hbs',
    'systems/existentia/templates/actor/parts/actor-spells.hbs',
    'systems/existentia/templates/actor/parts/actor-effects.hbs',
    // Item partials
    'systems/existentia/templates/item/parts/item-effects.hbs',
  ]);
};
