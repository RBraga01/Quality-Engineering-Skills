# TASKS.md — Quality Engineering Skills

> Regra: antes de começar qualquer tarefa, coloca o teu nome no **Assignee**.
> Se está `—` está livre. Uma tarefa por pessoa de cada vez no mesmo ficheiro.

---

## Em Curso

| ID | Tarefa | Assignee | Branch | Notas |
|----|--------|----------|--------|-------|
| — | — | — | — | — |

---

## Backlog — v2 (PPAP / APQP / Control Plan)

| ID | Tarefa | Assignee | Branch | Notas |
|----|--------|----------|--------|-------|
| T-001 | Criar skill `ppap-submission` (5 níveis, 18 elementos) | — | — | IATF 16949 §8.6.6 |
| T-002 | Criar skill `apqp-phases` (5 fases, gates de aprovação) | — | — | IATF 16949 §8.1 |
| T-003 | Criar skill `control-plan` (linkage com PFMEA) | — | — | IATF 16949 §8.5.1 |
| T-004 | Criar agente `/ppap-checker` (valida completude de submissão) | — | — | Depende de T-001 |

---

## Backlog — v3 (MSA / SPC / Supplier)

| ID | Tarefa | Assignee | Branch | Notas |
|----|--------|----------|--------|-------|
| T-005 | Criar skill `msa-gauge-rr` (Gauge R&R, estudo de repetibilidade) | — | — | IATF 16949 §7.1.5 |
| T-006 | Criar skill `spc-control-charts` (cartas de controlo, Cp/Cpk) | — | — | IATF 16949 §9.1.1 |
| T-007 | Criar skill `supplier-qualification` (PPAP fornecedor, CSR) | — | — | IATF 16949 §8.4 |

---

## Backlog — Multilíngue

| ID | Tarefa | Assignee | Branch | Notas |
|----|--------|----------|--------|-------|
| T-008 | Tradução PT das 5 skills de problem-solving | — | — | Mirror exacto do EN |
| T-009 | Tradução PT das 3 skills de risk-analysis | — | — | Mirror exacto do EN |
| T-010 | Tradução PT das 3 skills de documentation | — | — | Mirror exacto do EN |
| T-011 | Tradução PT das 2 skills de audit | — | — | Mirror exacto do EN |

---

## Backlog — Infra & Setup

| ID | Tarefa | Assignee | Branch | Notas |
|----|--------|----------|--------|-------|
| T-012 | Correr `/orchestrate init` e validar TEAM.md + ROUTING.md | — | — | Prerequisito para coordenação |
| T-013 | Configurar GitHub Actions CI (validar estrutura de SKILL.md) | — | — | |
| T-014 | Atualizar Claude.ai project com skills existentes (setup-guide.md) | — | — | |
| T-015 | Criar SKILL.md template oficial e adicionar ao CONTRIBUTING.md | — | — | |

---

## Concluído

| ID | Tarefa | Quem | Data |
|----|--------|------|------|
| — | Setup inicial do repo (18 skills + 5 agentes) | RBraga | 2026-06-04 |
| — | Instalação ATeam no domínio Quality-Engineering | Miguel | 2026-06-04 |
