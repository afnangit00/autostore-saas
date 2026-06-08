export default function SignupPage() {
  return (
    <div>
      <h1>Signup</h1>

      <form>
        <input
          type="text"
          placeholder="Name"
        />

        <input
          type="email"
          placeholder="Email"
        />

        <input
          type="password"
          placeholder="Password"
        />

        <button type="submit">
          Create Account
        </button>
      </form>
    </div>
  );
}