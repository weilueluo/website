

function create_cwk1_framework(canvasId) {
    return new Framework(
        canvasId, 
        vertexShaderId = 'cwk1-vertex-shader', 
        fragmentShaderId = 'cwk1-fragment-shader', 
        isPathTracer = false, 
        tonemapShaderId = null
    )
}


function create_cwk2_framework(canvasId) {
    return new Framework(
        canvasId, 
        vertexShaderId = 'cwk2-vertex-shader', 
        fragmentShaderId = 'cwk2-fragment-shader', 
        isPathTracer = false, 
        tonemapShaderId = null
    )
}

var framework = null;

function create_cwk3_framework(canvasId) {
    return new Framework(
        canvasId, 
        vertexShaderId = 'cwk3-vertex-shader', 
        fragmentShaderId = 'cwk3-fragment-shader', 
        isPathTracer = true, 
        tonemapShaderId = 'cwk3-tonemap-shader', 
    )
}

const canvasId = 'glCanvas';

function enable_UCLCG_work() {

}

function disable_UCLCG_work() {
    let canvas = document.getElementById(canvasId);
    canvas.width = 0;
    canvas.height = 0;
}


$('.link').on('click', e => {
    $('#wrapper').toggleClass('passive-state');
});

$('#uclcg-link').on('click', e => {
    $('.works-container').toggleClass('uclcg-active active-state');

    // if ($('.works-container').hasClass('uclcg-active')) {
    //     enable_UCLCG_work();
    // } else {
    //     disable_UCLCG_work();
    // }
});


function adjustCanvasSize() {

    let canvasContainer = document.querySelector('.canvas-container');
    let canvas = document.querySelector('.gl-canvas');

    // set to container size
    canvas.width  = canvasContainer.clientWidth;
    canvas.height = canvasContainer.clientHeight;

    console.log(canvas.width, canvas.height);

    // reduce a bit for some margin
    canvas.width -= Math.min(canvas.width * 0.05, 50);
    canvas.height -= Math.min(canvas.height * 0.1, 50);;

    console.log(canvas.width, canvas.height);

    // ensure 1 : 2 height width ratio
    if (canvas.width / 2.0 < canvas.height) {
        canvas.height = canvas.width / 2.0;
    } else if (canvas.height * 2 < canvas.width) {
        canvas.width = canvas.height * 2;
    }

    console.log(canvas.width, canvas.height);

}

$('.uclcg-container').on('transitionend webkitTransitionEnd oTransitionEnd', () => adjustCanvasSize());

function stopCurrentFramework() {
    framework && framework.stop();
}

$('#coursework1').on('click', () => {
    stopCurrentFramework()
    framework = create_cwk1_framework(canvasId);
    framework.initialize().then(() => framework.drawCanvas());
});

$('#coursework2').on('click', () => {
    stopCurrentFramework()
    framework = create_cwk2_framework(canvasId);
    framework.initialize().then(() => framework.drawCanvas());
});

$('#coursework3').on('click', () => {
    stopCurrentFramework()
    framework = create_cwk3_framework(canvasId);
    framework.initialize().then(() => framework.start(1000));
});