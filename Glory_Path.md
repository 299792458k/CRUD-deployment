Giai đoạn 1 — Docker (2–3 tuần)
Mục tiêu: Đóng gói từng service thành container độc lập.

Bước	Nội dung
1.1	Hiểu Image / Container / Dockerfile, lệnh cơ bản
1.2	Viết Dockerfile cho API (.NET 8) — multi-stage build
1.3	Viết Dockerfile cho Client (Vite → Nginx)
1.4	Viết docker-compose.yml cho cả 3 service: db + api + client
1.5	Chạy docker compose up, xem logs, thử tắt/bật service
Giai đoạn 2 — Kubernetes (3–4 tuần)
Mục tiêu: Deploy lên cluster, scale và quản lý services.

Bước	Nội dung
2.1	Hiểu Pod / Deployment / Service, cài Minikube local
2.2	Viết manifest YAML cho từng service
2.3	ConfigMap & Secret (inject DB password vào Pod)
2.4	Ingress (1 endpoint duy nhất route đến api/client)
2.5	Scale, rolling update, rollback với kubectl
Giai đoạn 3 — Jenkins CI/CD (2–3 tuần)
Mục tiêu: Tự động build → test → push image → deploy khi push code.

Bước	Nội dung
3.1	Cài Jenkins bằng Docker, hiểu declarative Pipeline
3.2	Viết Jenkinsfile: Build → Test → Push → Deploy
3.3	GitHub Webhook trigger Jenkins khi push lên main
3.4	Lưu credentials (DockerHub, kubeconfig) trong Jenkins
3.5	Chạy end-to-end: push code → K8s tự rolling update
Thứ tự học

Docker cơ bản → Dockerfile (API + Client) → Docker Compose
    ↓
Minikube + kubectl → K8s manifests → ConfigMap/Secret + Ingress
    ↓
Jenkins Pipeline → CI/CD + Git Webhook