import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export const Hero3DScene: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isSupported, setIsSupported] = useState(true);

  useEffect(() => {
    if (!containerRef.current) return;

    // Reduced motion preference check
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // WebGL support check
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (!gl) {
      setIsSupported(false);
      return;
    }

    const container = containerRef.current;
    const isMobile = window.innerWidth < 768;
    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(isMobile ? 55 : 45, width / height, 0.1, 1000);
    camera.position.set(0, 0, isMobile ? 26 : 22);

    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true,
      powerPreference: 'default'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.5 : 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.0;
    container.appendChild(renderer.domElement);

    // 2. Elegant Studio Lighting (Warm Key + Navy Rim)
    const ambientLight = new THREE.AmbientLight(0xFFFFFF, 1.4);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xFFF6E8, 2.0);
    keyLight.position.set(10, 15, 15);
    scene.add(keyLight);

    const softNavyFill = new THREE.DirectionalLight(0x101B35, 1.2);
    softNavyFill.position.set(-15, -10, 10);
    scene.add(softNavyFill);

    // 3. Central Architectural Armillary Sphere (Classic Conglomerate Core)
    const armillaryGroup = new THREE.Group();
    scene.add(armillaryGroup);

    // Subtle brushed bronze/gold and navy metallic materials
    const goldMaterial = new THREE.MeshStandardMaterial({
      color: 0xCF9D42,
      metalness: 0.85,
      roughness: 0.25,
    });

    const navyMaterial = new THREE.MeshStandardMaterial({
      color: 0x101B35,
      metalness: 0.6,
      roughness: 0.35,
    });

    const glassMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xFFFFFF,
      metalness: 0.1,
      roughness: 0.1,
      transmission: 0.85,
      transparent: true,
      opacity: 0.45,
    });

    // Outer Equatorial Ring
    const outerRingGeo = new THREE.TorusGeometry(isMobile ? 6.2 : 7.5, 0.04, 16, 120);
    const outerRing = new THREE.Mesh(outerRingGeo, navyMaterial);
    armillaryGroup.add(outerRing);

    // Meridian Ring (Gold)
    const meridianRingGeo = new THREE.TorusGeometry(isMobile ? 5.8 : 7.0, 0.04, 16, 120);
    const meridianRing = new THREE.Mesh(meridianRingGeo, goldMaterial);
    meridianRing.rotation.y = Math.PI / 2;
    armillaryGroup.add(meridianRing);

    // Oblique Orbit Ring
    const obliqueRingGeo = new THREE.TorusGeometry(isMobile ? 5.4 : 6.5, 0.035, 16, 120);
    const obliqueRing = new THREE.Mesh(obliqueRingGeo, navyMaterial);
    obliqueRing.rotation.x = Math.PI / 4;
    obliqueRing.rotation.y = Math.PI / 4;
    armillaryGroup.add(obliqueRing);

    // Central Core Sphere (Soft frosted glass with golden core)
    const coreSphereGeo = new THREE.SphereGeometry(isMobile ? 1.8 : 2.2, 32, 32);
    const coreSphere = new THREE.Mesh(coreSphereGeo, glassMaterial);
    armillaryGroup.add(coreSphere);

    const innerGoldGeo = new THREE.IcosahedronGeometry(isMobile ? 1.0 : 1.2, 1);
    const innerGold = new THREE.Mesh(innerGoldGeo, goldMaterial);
    armillaryGroup.add(innerGold);

    // 10 Subtle Celestial Sector Beacons
    const beaconCount = 10;
    const beacons: THREE.Mesh[] = [];
    for (let i = 0; i < beaconCount; i++) {
      const angle = (i / beaconCount) * Math.PI * 2;
      const radius = (isMobile ? 6.2 : 7.5);
      const bGeo = new THREE.SphereGeometry(0.18, 16, 16);
      const bMat = (i % 2 === 0) ? goldMaterial : navyMaterial;
      const bMesh = new THREE.Mesh(bGeo, bMat);
      bMesh.position.set(Math.cos(angle) * radius, Math.sin(angle) * radius, 0);
      outerRing.add(bMesh);
      beacons.push(bMesh);
    }

    // Gentle Floating Ambient Dust (Minimal, Elegant, Non-Distracting)
    const particleCount = isMobile ? 35 : 70;
    const pGeo = new THREE.BufferGeometry();
    const pPos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      pPos[i * 3] = (Math.random() - 0.5) * 35;
      pPos[i * 3 + 1] = (Math.random() - 0.5) * 25;
      pPos[i * 3 + 2] = (Math.random() - 0.5) * 15;
    }
    pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
    const pMat = new THREE.PointsMaterial({
      color: 0x101B35,
      size: 0.12,
      transparent: true,
      opacity: 0.25,
    });
    const particlePoints = new THREE.Points(pGeo, pMat);
    scene.add(particlePoints);

    // Gentle Parallax Tracking
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / width) - 0.5;
      const y = (e.clientY / height) - 0.5;
      mouseX = x * 1.5;
      mouseY = y * 1.5;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const x = (e.touches[0].clientX / width) - 0.5;
        const y = (e.touches[0].clientY / height) - 0.5;
        mouseX = x * 1.2;
        mouseY = y * 1.2;
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth || window.innerWidth;
      const h = container.clientHeight || window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const delta = clock.getElapsedTime();
      const speed = prefersReducedMotion ? 0.03 : 0.12;

      // Stately, dignified corporate rotation
      armillaryGroup.rotation.y = delta * speed;
      meridianRing.rotation.x = delta * speed * 0.7;
      innerGold.rotation.y = -delta * speed * 1.5;

      targetX += (mouseX - targetX) * 0.03;
      targetY += (mouseY - targetY) * 0.03;

      armillaryGroup.rotation.x = targetY * 0.4;
      armillaryGroup.rotation.z = -targetX * 0.2;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animId);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden select-none opacity-45">
      <div ref={containerRef} className="w-full h-full" />
      {!isSupported && (
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{ backgroundImage: `url('/assets/images/hero_conglomerate.svg')` }}
        />
      )}
    </div>
  );
};
