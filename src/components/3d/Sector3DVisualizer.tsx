import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface Sector3DVisualizerProps {
  sectorId: string;
  accentColor: string;
}

export const Sector3DVisualizer: React.FC<Sector3DVisualizerProps> = ({ sectorId, accentColor }) => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const container = mountRef.current;
    const isMobile = window.innerWidth < 768;
    const width = container.clientWidth || 320;
    const height = container.clientHeight || 280;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, isMobile ? 16 : 14);

    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: !isMobile,
      powerPreference: 'low-power'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.5 : 2));
    container.appendChild(renderer.domElement);

    const colorHex = parseInt(accentColor.replace('#', '0x'), 16) || 0x1FD2FF;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(colorHex, 3, 30);
    pointLight.position.set(5, 5, 8);
    scene.add(pointLight);

    const group = new THREE.Group();
    scene.add(group);

    // Build sector-specific 3D geometry
    let mainMesh: THREE.Object3D;

    switch (sectorId) {
      case 'construction-engineering': {
        const geom = new THREE.BoxGeometry(4, 7, 4, 3, 5, 3);
        const mat = new THREE.MeshStandardMaterial({
          color: colorHex,
          wireframe: true,
          metalness: 0.8,
          roughness: 0.2,
          emissive: colorHex,
          emissiveIntensity: 0.2
        });
        mainMesh = new THREE.Mesh(geom, mat);
        break;
      }

      case 'civil-engineering': {
        const geom = new THREE.TorusGeometry(4.2, 0.8, 16, 50, Math.PI);
        const mat = new THREE.MeshStandardMaterial({
          color: colorHex,
          wireframe: true,
          roughness: 0.3,
        });
        mainMesh = new THREE.Mesh(geom, mat);
        mainMesh.rotation.z = Math.PI;
        break;
      }

      case 'mining-energy': {
        const geom = new THREE.OctahedronGeometry(3.5, 1);
        const mat = new THREE.MeshStandardMaterial({
          color: colorHex,
          roughness: 0.1,
          metalness: 0.9,
          wireframe: true,
          emissive: colorHex,
          emissiveIntensity: 0.4
        });
        mainMesh = new THREE.Mesh(geom, mat);
        break;
      }

      case 'agriculture': {
        const geom = new THREE.TorusKnotGeometry(2.8, 0.7, 80, 16, 2, 3);
        const mat = new THREE.MeshStandardMaterial({
          color: colorHex,
          wireframe: true,
          roughness: 0.5,
        });
        mainMesh = new THREE.Mesh(geom, mat);
        break;
      }

      case 'property-investment': {
        const towerGroup = new THREE.Group();
        const t1 = new THREE.Mesh(new THREE.BoxGeometry(2, 6, 2), new THREE.MeshStandardMaterial({ color: colorHex, wireframe: true }));
        const t2 = new THREE.Mesh(new THREE.BoxGeometry(1.6, 8, 1.6), new THREE.MeshStandardMaterial({ color: 0xFFC400, wireframe: true }));
        const t3 = new THREE.Mesh(new THREE.BoxGeometry(2.2, 4.5, 2.2), new THREE.MeshStandardMaterial({ color: 0x1FD2FF, wireframe: true }));
        t1.position.x = -1.5;
        t2.position.x = 1.2;
        t3.position.z = 1.5;
        towerGroup.add(t1, t2, t3);
        mainMesh = towerGroup;
        break;
      }

      case 'automotive-repair': {
        const geom = new THREE.CylinderGeometry(3.2, 3.2, 5, 8, 4, true);
        const mat = new THREE.MeshStandardMaterial({
          color: colorHex,
          wireframe: true,
          emissive: colorHex,
          emissiveIntensity: 0.3
        });
        mainMesh = new THREE.Mesh(geom, mat);
        mainMesh.rotation.z = Math.PI / 2;
        break;
      }

      case 'petroleum-products': {
        const petroGroup = new THREE.Group();
        const sphere = new THREE.Mesh(new THREE.SphereGeometry(2.8, 24, 24), new THREE.MeshStandardMaterial({ color: colorHex, wireframe: true }));
        const ring = new THREE.Mesh(new THREE.TorusGeometry(4, 0.1, 16, 60), new THREE.MeshBasicMaterial({ color: 0xFF8A00 }));
        ring.rotation.x = Math.PI / 2;
        petroGroup.add(sphere, ring);
        mainMesh = petroGroup;
        break;
      }

      case 'import-export-freight': {
        const tradeGroup = new THREE.Group();
        const globe = new THREE.Mesh(new THREE.SphereGeometry(2.6, 24, 24), new THREE.MeshStandardMaterial({ color: colorHex, wireframe: true, emissive: colorHex, emissiveIntensity: 0.25 }));
        const route1 = new THREE.Mesh(new THREE.TorusGeometry(3.8, 0.07, 16, 80), new THREE.MeshBasicMaterial({ color: 0xFF8A00 }));
        route1.rotation.x = Math.PI / 3;
        const route2 = new THREE.Mesh(new THREE.TorusGeometry(3.8, 0.07, 16, 80), new THREE.MeshBasicMaterial({ color: 0xFFC400 }));
        route2.rotation.y = Math.PI / 3;
        tradeGroup.add(globe, route1, route2);
        mainMesh = tradeGroup;
        break;
      }

      case 'banking-financial': {
        const bankGroup = new THREE.Group();
        for (let i = 0; i < 3; i++) {
          const ring = new THREE.Mesh(
            new THREE.TorusGeometry(2.6 + i * 1.1, 0.08, 16, 60),
            new THREE.MeshStandardMaterial({ color: i === 1 ? 0xFFC400 : colorHex, emissive: colorHex, emissiveIntensity: 0.3 })
          );
          ring.rotation.x = (i * Math.PI) / 3;
          ring.rotation.y = (i * Math.PI) / 4;
          bankGroup.add(ring);
        }
        mainMesh = bankGroup;
        break;
      }

      case 'information-technology':
      default: {
        const itGroup = new THREE.Group();
        const dodec = new THREE.Mesh(new THREE.DodecahedronGeometry(3, 1), new THREE.MeshStandardMaterial({ color: colorHex, wireframe: true, emissive: colorHex, emissiveIntensity: 0.5 }));
        const outer = new THREE.Mesh(new THREE.SphereGeometry(4.2, 16, 16), new THREE.MeshBasicMaterial({ color: 0x1FD2FF, wireframe: true, transparent: true, opacity: 0.2 }));
        itGroup.add(dodec, outer);
        mainMesh = itGroup;
        break;
      }
    }

    group.add(mainMesh);

    // Orbiting particles
    const pCount = isMobile ? 40 : 80;
    const pGeom = new THREE.BufferGeometry();
    const pPos = new Float32Array(pCount * 3);
    for (let i = 0; i < pCount; i++) {
      const theta = Math.random() * Math.PI * 2;
      const r = 4.5 + Math.random() * 2;
      pPos[i * 3] = Math.cos(theta) * r;
      pPos[i * 3 + 1] = (Math.random() - 0.5) * 4;
      pPos[i * 3 + 2] = Math.sin(theta) * r;
    }
    pGeom.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
    const pMat = new THREE.PointsMaterial({ color: colorHex, size: isMobile ? 0.16 : 0.12, transparent: true, opacity: 0.8 });
    const pMesh = new THREE.Points(pGeom, pMat);
    group.add(pMesh);

    // Touch & Pointer interaction for phones
    let isDragging = false;
    let previousTouchX = 0;
    let previousTouchY = 0;
    let rotationVelocityX = 0;
    let rotationVelocityY = 0;

    const onPointerDown = (e: PointerEvent) => {
      isDragging = true;
      previousTouchX = e.clientX;
      previousTouchY = e.clientY;
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!isDragging) return;
      const deltaX = e.clientX - previousTouchX;
      const deltaY = e.clientY - previousTouchY;
      rotationVelocityY = deltaX * 0.005;
      rotationVelocityX = deltaY * 0.005;
      previousTouchX = e.clientX;
      previousTouchY = e.clientY;
    };

    const onPointerUp = () => {
      isDragging = false;
    };

    container.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);

    // Animation loop
    let animId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const delta = clock.getElapsedTime();

      if (!isDragging) {
        group.rotation.y += 0.008;
        group.rotation.x = Math.sin(delta * 0.3) * 0.15;
      } else {
        group.rotation.y += rotationVelocityY;
        group.rotation.x += rotationVelocityX;
        rotationVelocityX *= 0.95;
        rotationVelocityY *= 0.95;
      }

      pMesh.rotation.y = -delta * 0.15;
      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      container.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animId);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [sectorId, accentColor]);

  return (
    <div className="relative w-full h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden glass-panel border border-white/10 flex items-center justify-center touch-pan-y">
      <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />
      <div className="absolute bottom-2.5 left-3 sm:bottom-3 sm:left-4 text-[10px] sm:text-[11px] font-mono tracking-wider text-slate-400 uppercase flex items-center gap-2 pointer-events-none">
        <span className="w-2 h-2 rounded-full animate-ping" style={{ backgroundColor: accentColor }} />
        <span>Drag to rotate • {sectorId.replace('-', ' ')}</span>
      </div>
    </div>
  );
};
