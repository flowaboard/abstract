import {DesignElement,FlowDesigns} from 'https://flowaboard.github.io/flowaboard/front-end/flowdesign/design.js';

var abstractDesign = new FlowDesigns.ListDesign('Abstract', 'abstract', `https://en.wikipedia.org/wiki/Abstraction`);
abstractDesign.add(new DesignElement('Mathematics', 'mathematics', `https://en.wikipedia.org/wiki/Mathematics`, 'flow-info', 'https://flowaboard.github.io/flowaboard/front-end/flowdesign/mathematics/index.js'));
abstractDesign.add(new DesignElement('Programming', 'programming', `https://en.wikipedia.org/wiki/Computer_programming`,'flow-info','https://flowaboard.github.io/flowaboard/front-end/flowdesign/programming/index.js'));
abstractDesign.add(new DesignElement('AI', 'ai', 'https://en.wikipedia.org/wiki/Artificial_intelligence','flow-info','https://flowaboard.github.io/flowaboard/front-end/flowdesign/artificial_intelligence/index.js'));
abstractDesign.add(new DesignElement('Business', 'business', 'https://en.wikipedia.org/wiki/Business','flow-info','https://flowaboard.github.io/flowaboard/front-end/flowdesign/business/index.js'));

abstractDesign.flowConfig = {
    flex: true,
    defaultValue: {
        widthfactor: abstractDesign.designElements.length,
        xPadding: 0.4,
        yPadding: 0.4,
    },
    elementAction: {
        "click" : {"action":"flow","state":"default"}
    }
}

export default abstractDesign;
