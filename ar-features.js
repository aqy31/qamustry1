// AR Features Implementation
// Button 1: Drawing
// Button 2: 3D Model Viewer
// Button 3: AR Hand Tracking (Move with hand)
// Button 4: AR Floor Tracking
// Button 5: AR Hand Tracking (Fixed on hand)

const AR_STATE = {
    mode: null,
    cameraActive: false,
    camera: null,
};

const placeholderModelUrl = "qwqee.glb";

// Create UI Container for AR Tools
function createARUI() {
    if (document.getElementById('ar-tools-container')) return;

    const container = document.createElement('div');
    container.id = 'ar-tools-container';
    container.innerHTML = `
        <div id="ar-dock">
            <button class="ar-btn" id="btn-draw" title="رسم">✏️ الرسم</button>
            <button class="ar-btn" id="btn-3d" title="تحريك المجسم">🧊 عرض 3D</button>
            <button class="ar-btn" id="btn-ar-hand-move" title="المجسم يتحرك مع اليد">✋ AR حركة</button>
            <button class="ar-btn" id="btn-ar-floor" title="المجسم ثابت بالأرض">🌍 AR الأرضية</button>
            <button class="ar-btn" id="btn-ar-hand-fixed" title="المجسم ثابت باليد">🖐️ AR ثابت</button>
        </div>
        <div id="ar-view-container" style="display: none;">
            <button id="ar-close-btn">✖ إغلاق</button>
            <div id="ar-content"></div>
        </div>
    `;
    document.body.appendChild(container);

    document.getElementById('btn-draw').addEventListener('click', () => startMode('drawing'));
    document.getElementById('btn-3d').addEventListener('click', () => startMode('3d'));
    document.getElementById('btn-ar-hand-move').addEventListener('click', () => startMode('ar-hand-move'));
    document.getElementById('btn-ar-floor').addEventListener('click', () => startMode('ar-floor'));
    document.getElementById('btn-ar-hand-fixed').addEventListener('click', () => startMode('ar-hand-fixed'));
    document.getElementById('ar-close-btn').addEventListener('click', closeARView);
}

function startMode(mode) {
    AR_STATE.mode = mode;
    const viewContainer = document.getElementById('ar-view-container');
    const content = document.getElementById('ar-content');
    
    // Force synchronous display update and reflow to maintain user gesture context for iOS Safari
    viewContainer.style.display = 'flex';
    void viewContainer.offsetWidth; 
    
    content.innerHTML = ''; // Clear previous content

    if (mode === 'drawing') {
        setupDrawing(content);
    } else if (mode === '3d') {
        setup3DViewer(content);
    } else if (mode === 'ar-floor') {
        setupARFloor(content);
    } else if (mode === 'ar-hand-move' || mode === 'ar-hand-fixed') {
        setupHandTracking(content, mode);
    }
}

function closeARView() {
    document.getElementById('ar-view-container').style.display = 'none';
    const content = document.getElementById('ar-content');
    content.innerHTML = '';
    
    if (AR_STATE.cameraActive && AR_STATE.camera) {
        AR_STATE.camera.stop();
        AR_STATE.cameraActive = false;
    }
}

function setupDrawing(container) {
    const canvas = document.createElement('canvas');
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.background = '#fff';
    canvas.style.borderRadius = '12px';
    canvas.style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)';
    canvas.style.touchAction = 'none'; // CRITICAL FOR MOBILE
    container.appendChild(canvas);

    // Set actual internal dimensions
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width || window.innerWidth * 0.9;
    canvas.height = rect.height || window.innerHeight * 0.8;

    const ctx = canvas.getContext('2d');
    ctx.lineWidth = 5;
    ctx.lineCap = 'round';
    ctx.strokeStyle = '#000';

    let isDrawing = false;
    let lastX = 0;
    let lastY = 0;

    function getCoords(e) {
        const clientX = (e.touches && e.touches.length > 0) ? e.touches[0].clientX : e.clientX;
        const clientY = (e.touches && e.touches.length > 0) ? e.touches[0].clientY : e.clientY;
        const currentRect = canvas.getBoundingClientRect();
        return {
            x: (clientX - currentRect.left) * (canvas.width / currentRect.width),
            y: (clientY - currentRect.top) * (canvas.height / currentRect.height)
        };
    }

    function startDraw(e) {
        isDrawing = true;
        const coords = getCoords(e);
        lastX = coords.x;
        lastY = coords.y;
    }

    function draw(e) {
        if (!isDrawing) return;
        if (e.cancelable) e.preventDefault(); // Prevent scrolling on mobile
        const coords = getCoords(e);

        ctx.beginPath();
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(coords.x, coords.y);
        ctx.stroke();
        lastX = coords.x;
        lastY = coords.y;
    }

    function stopDraw() {
        isDrawing = false;
    }

    canvas.addEventListener('mousedown', startDraw);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', stopDraw);
    canvas.addEventListener('mouseout', stopDraw);

    canvas.addEventListener('touchstart', startDraw, {passive: false});
    canvas.addEventListener('touchmove', draw, {passive: false});
    canvas.addEventListener('touchend', stopDraw);
}

function setup3DViewer(container) {
    const modelViewer = document.createElement('model-viewer');
    modelViewer.src = placeholderModelUrl;
    modelViewer.alt = "A 3D model";
    modelViewer.autoRotate = true;
    modelViewer.cameraControls = true;
    modelViewer.style.width = '100%';
    modelViewer.style.height = '100%';
    modelViewer.style.background = '#f0f0f0';
    modelViewer.style.borderRadius = '12px';
    container.appendChild(modelViewer);
}

function setupARFloor(container) {
    container.innerHTML = `
        <div style="text-align: center; color: white; display: flex; flex-direction: column; align-items: center; justify-content: center; width: 100%; height: 100%;">
            <h3 style="font-size: 1.8rem; margin-bottom: 20px;">لتثبيت المجسم على الأرض</h3>
            <p style="font-size: 1.1rem; line-height: 1.6; margin-bottom: 40px; max-width: 80%;">سيعمل المتصفح الآن على تشغيل كاميرا هاتفك الذكي للتعرف على الأرضية وتثبيت المجسم في غرفتك.</p>
            <button id="trigger-ar-btn" style="background-color: #4caf50; color: white; border-radius: 12px; border: none; padding: 20px 40px; font-size: 20px; font-weight: bold; box-shadow: 0 6px 15px rgba(0,0,0,0.4); cursor: pointer;">🎥 اضغط هنا لتشغيل الكاميرا</button>
        </div>
    `;
    
    const modelViewer = document.createElement('model-viewer');
    modelViewer.src = placeholderModelUrl;
    modelViewer.ar = true;
    modelViewer.arModes = "webxr scene-viewer quick-look";
    modelViewer.style.position = 'absolute';
    modelViewer.style.width = '1px';
    modelViewer.style.height = '1px';
    modelViewer.style.opacity = '0';
    modelViewer.style.pointerEvents = 'none';
    
    container.appendChild(modelViewer);

    document.getElementById('trigger-ar-btn').addEventListener('click', () => {
        modelViewer.activateAR();
    });

    modelViewer.addEventListener('ar-status', (event) => {
        if(event.detail.status === 'failed'){
             alert("جهازك أو متصفحك لا يدعم تقنية الواقع المعزز WebXR أو AR Quick Look. تأكد من استخدام هاتف مدعوم (مثل iPhone حديث أو Android).");
        }
    });
}

function setupHandTracking(container, mode) {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        alert("عذراً، متصفحك لا يدعم الكاميرا أو تحتاج إلى فتح الموقع ببروتوكول آمن (HTTPS).");
        return;
    }

    container.innerHTML = `
        <video id="input_video" autoplay playsinline style="position: absolute; top:0; left:0; width:100%; height:100%; object-fit:cover; z-index: 1; border-radius: 12px;"></video>
        <canvas id="output_canvas" style="position: absolute; top:0; left:0; width:100%; height:100%; object-fit:cover; z-index: 2; pointer-events: none; border-radius: 12px;"></canvas>
        <div id="loading_msg" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); color: white; background: rgba(0,0,0,0.8); padding: 15px 25px; border-radius: 10px; z-index: 3; font-family: sans-serif; text-align: center; font-weight: bold; font-size: 1.1rem; line-height: 1.5;">جاري تشغيل الكاميرا والذكاء الاصطناعي...<br><span style="font-size: 0.9rem; font-weight: normal;">يرجى الموافقة على صلاحية الكاميرا</span></div>
    `;
    
    const videoElement = document.getElementById('input_video');
    const canvasElement = document.getElementById('output_canvas');
    const loadingMsg = document.getElementById('loading_msg');

    // Setup Three.js overlay
    const scene = new THREE.Scene();
    
    const rect = container.getBoundingClientRect();
    const w = rect.width || window.innerWidth * 0.9;
    const h = rect.height || window.innerHeight * 0.8;
    canvasElement.width = w;
    canvasElement.height = h;

    const camera = new THREE.PerspectiveCamera(75, w/h, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: canvasElement, alpha: true });
    renderer.setSize(w, h, false);
    
    const light = new THREE.HemisphereLight(0xffffff, 0x444444);
    light.position.set(0, 20, 0);
    scene.add(light);

    // Create a 3D Group to hold the GLTF model
    let modelGroup = new THREE.Group();
    scene.add(modelGroup);
    modelGroup.visible = false;
    
    let isModelLoaded = false;
    let isHandsLoaded = false;
    
    const ambientLight = new THREE.AmbientLight(0xffffff, 2.0);
    scene.add(ambientLight);

    camera.position.z = 10;
    
    if (loadingMsg) loadingMsg.innerHTML = "جاري تحميل المجسم والذكاء الاصطناعي...<br><span style='font-size: 0.9rem; font-weight: normal;'>المجسم حجمه تقريباً 4 ميجابايت، يرجى الانتظار</span>";

    const gltfLoader = new THREE.GLTFLoader();
    gltfLoader.load(placeholderModelUrl, function(gltf) {
        const model = gltf.scene;
        model.scale.set(5, 5, 5); 
        model.position.set(0, -2, 0); 
        // الف المجسم بالعكس (180 درجة) عشان راحة اليد تكون واجهة المجسم
        model.rotation.y = Math.PI; 
        modelGroup.add(model);
        isModelLoaded = true;
        checkLoadingComplete();
    }, undefined, function(error) {
        console.error("Error loading model:", error);
        if (loadingMsg) loadingMsg.innerHTML = "حدث خطأ أثناء تحميل المجسم.";
    });

    function checkLoadingComplete() {
        if (isModelLoaded && isHandsLoaded && loadingMsg) {
            loadingMsg.innerHTML = "تم تحميل المجسم!<br><span style='color:#4caf50; font-size:1.2rem;'>هسه مد ايدك أمام الكاميرا</span>";
            setTimeout(() => {
                loadingMsg.style.display = 'none';
            }, 3000);
        }
    }

    function onResults(results) {
        if (!isHandsLoaded) {
            isHandsLoaded = true;
            checkLoadingComplete();
        }

        if (results.multiHandLandmarks && results.multiHandLandmarks.length > 0) {
            if (isModelLoaded) modelGroup.visible = true;
            const landmarks = results.multiHandLandmarks[0];
            
            if (mode === 'ar-hand-move') {
                const indexFinger = landmarks[8];
                const x = (indexFinger.x - 0.5) * 15;
                const y = -(indexFinger.y - 0.5) * 15;
                modelGroup.position.set(x, y, 0);
                modelGroup.rotation.y += 0.05;
            } else if (mode === 'ar-hand-fixed') {
                const palm = landmarks[9];
                const wrist = landmarks[0];
                const x = (palm.x - 0.5) * 15;
                const y = -(palm.y - 0.5) * 15;
                modelGroup.position.set(x, y, 0);
                
                const dx = palm.x - wrist.x;
                const dy = palm.y - wrist.y;
                const angle = Math.atan2(dy, dx);
                modelGroup.rotation.z = -angle;
            }
        } else {
            modelGroup.visible = false;
        }
        
        renderer.clear();
        renderer.render(scene, camera);
    }

    try {
        const hands = new Hands({locateFile: (file) => {
            return \`https://cdn.jsdelivr.net/npm/@mediapipe/hands/\${file}\`;
        }});
        
        hands.setOptions({
            maxNumHands: 1,
            modelComplexity: 1,
            minDetectionConfidence: 0.5,
            minTrackingConfidence: 0.5
        });
        
        hands.onResults(onResults);

        const cameraUtils = new Camera(videoElement, {
            onFrame: async () => {
                await hands.send({image: videoElement});
            },
            width: 640,
            height: 480
        });
        
        cameraUtils.start().catch(err => {
            loadingMsg.style.display = 'none';
            alert("فشل تشغيل الكاميرا: " + err.message + "\\nيرجى التأكد من إعطاء الصلاحية.");
        });
        
        AR_STATE.camera = cameraUtils;
        AR_STATE.cameraActive = true;
    } catch(e) {
        alert("حدث خطأ أثناء تحميل مكتبة تتبع اليد: " + e.message);
        loadingMsg.style.display = 'none';
    }
}

// Add CSS dynamically
const style = document.createElement('style');
style.textContent = \`
    #ar-tools-container {
        position: fixed;
        bottom: 15px;
        left: 50%;
        transform: translateX(-50%);
        z-index: 1000;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
    }
    #ar-dock {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 8px;
        background: rgba(255, 255, 255, 0.95);
        padding: 10px;
        border-radius: 16px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.3);
        backdrop-filter: blur(8px);
        width: 95%;
        max-width: 600px;
    }
    body.dark #ar-dock {
        background: rgba(30, 30, 35, 0.95);
    }
    .ar-btn {
        background: var(--accent);
        color: white;
        border: none;
        padding: 10px;
        border-radius: 12px;
        font-family: 'Amiri', serif;
        font-size: 0.95rem;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 6px;
        flex: 1 1 25%;
        min-width: 80px;
        transition: transform 0.2s, background 0.2s;
    }
    .ar-btn:active {
        transform: scale(0.95);
    }
    #ar-view-container {
        position: fixed;
        top: 0; left: 0; width: 100vw; height: 100vh;
        background: rgba(0,0,0,0.9);
        z-index: 2000;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    #ar-content {
        width: 95%;
        height: 85%;
        background: transparent;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
    }
    #ar-close-btn {
        position: absolute;
        top: 20px;
        right: 20px;
        background: #ff4757;
        color: white;
        border: none;
        padding: 12px 24px;
        border-radius: 10px;
        font-size: 1.1rem;
        cursor: pointer;
        z-index: 2010;
        font-weight: bold;
        box-shadow: 0 4px 10px rgba(0,0,0,0.5);
    }
\`;
document.head.appendChild(style);

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createARUI);
} else {
    createARUI();
}
