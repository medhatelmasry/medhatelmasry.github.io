---
name: update-readme-on-feature
description: 'Update README.md whenever a new feature, route, page, workflow, or user-visible capability is added to this project. Use during feature implementation, feature completion, and pull request preparation.'
argument-hint: 'Describe the feature that was added and the README section it should update.'
---

# Update README on Feature Work

## Purpose

Keep the repository README aligned with the features users can discover and run. Treat the README update as part of completing feature work, not as a separate follow-up task.

## When to Use

Use this skill when a change adds or materially changes any of the following:

- A user-visible page, route, section, or navigation entry
- A new workflow, integration, command, or deployment capability
- A significant content area or public resource
- A feature that changes local setup, production build, or deployment steps

Do not change the README for internal refactors, formatting-only changes, dependency patches with no user-facing effect, or bug fixes unless they alter documented behavior.

## Procedure

1. Identify the feature's user-visible behavior and its intended audience.
2. Read the current `README.md` before editing it. Find the most relevant existing section; prefer extending an existing list or paragraph over creating a new section.
3. Compare the feature against the README:
   - Add missing routes or site sections to the existing site-sections list.
   - Add meaningful capabilities to the purpose or notes sections when they are not route-specific.
   - Update stack, local-development, build, or deployment instructions only when the feature changes them.
   - Correct stale wording that the feature makes inaccurate.
4. Write concise documentation that explains what exists and how to use or find it. Do not document implementation details that users do not need.
5. Preserve the README's existing Markdown style and ordering. Avoid unrelated rewrites, duplicate entries, promotional claims, and speculative details.
6. Review the resulting diff to confirm the README change is directly attributable to the feature and does not remove useful existing information.
7. Run the narrowest relevant validation available. For this project, use `npm run lint` for TypeScript/React changes and `npm run build` when routes, build behavior, or deployment configuration changed.
8. Report the feature implementation and the README section updated. If no README change is needed, state why the feature is outside this skill's documentation scope.

## Completion Criteria

A feature task is complete only when:

- The README accurately describes the new user-visible behavior.
- The documentation is placed in the existing section that readers would expect.
- No duplicate or unrelated README content was introduced.
- Relevant project validation passes, or any pre-existing/environmental failure is reported clearly.
