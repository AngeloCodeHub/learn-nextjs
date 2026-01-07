---
name: setupAuthenticationWithBackend
description: Create a complete authentication system integrating a specified backend service into an existing Next.js project.
argument-hint: The backend service name (e.g., Supabase, Firebase, Auth0) and any relevant existing project documentation or reference implementations.
---

# Setup Complete Authentication System with Backend Service

Create a comprehensive authentication system that integrates the specified backend service into the current Next.js project with authentication UI, protected routes, and user session management.

## Analysis Phase

1. **Inventory Existing Resources**
   - Check if the backend service is already configured (client files, environment variables, dependencies)
   - Identify existing authentication-related code, UI components, or partial implementations
   - Review the project's tech stack: styling framework, UI component library, TypeScript configuration
   - Note the project structure (app directory, component organization, lib utilities)

2. **Identify Reference Materials**
   - Search for existing example implementations in the project or documentation folders
   - Extract patterns, file structure, and best practices from reference code

## Implementation Phase

3. **Setup Backend Service**
   - Install required dependencies (e.g., `@supabase/supabase-js`, `@supabase/ssr`)
   - Create `.env.local` with necessary credentials
   - Initialize client files (browser-side, server-side, and middleware clients)
   - Configure middleware for route protection

4. **Create Authentication Routes**
   - Build login page with email/password form
   - Build sign-up page with validation
   - Build password recovery flow
   - Implement authentication callbacks (e.g., OAuth redirect handlers)

5. **Integrate with Existing Components**
   - Enhance existing login UI components with actual backend calls
   - Replace placeholder handlers with real authentication logic
   - Add proper error handling and user feedback (toast notifications, error messages)
   - Implement successful authentication redirect logic

6. **Implement Protected Routes & Session Management**
   - Create protected route examples (e.g., dashboard, profile)
   - Set up middleware to verify user sessions
   - Ensure proper session persistence across Server and Client Components
   - Handle logout functionality

## Key Deliverables

- ✅ Functional login/sign-up system with the specified backend
- ✅ Protected routes with automatic redirection
- ✅ User session management
- ✅ Error handling and validation
- ✅ Social authentication (OAuth) support (optional)
- ✅ Email verification flow (optional)
- ✅ Password recovery functionality (optional)

## Considerations

- How should email verification work? (automatic, manual confirmation)
- Session strategy for Server Components vs Client Components
- Required UI feedback for authentication states (loading, error, success)
- Additional authentication features (2FA, social login providers)
