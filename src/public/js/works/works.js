

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
    let canvas = document.getElementById(canvasId);
    canvas.width = 800;
    canvas.height = 400;
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

    if ($('.works-container').hasClass('uclcg-active')) {
        enable_UCLCG_work();
    } else {
        disable_UCLCG_work();
    }
});

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