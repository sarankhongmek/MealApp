import Component from '@ember/component';

export default Component.extend({
    orderManager: Ember.inject.service('order-manager'),
    classNames:['menu-item'],
    tagNames: 'li',
    mealCategory: 'breakfast',
    actions:{
        changeCategory(category){
            this.set('mealCategory',category);
        },
        chooseItem(menuItemName){
            this.get('orderManager').chooseMenuOption(this.get('mealCategory'),menuItemName);
        }
    }
});
