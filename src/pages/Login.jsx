import React, { useEffect } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import {
  UserOutlined,
  LockOutlined,
  EyeTwoTone,
  EyeInvisibleOutlined,
} from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { delay, duration: 0.5 } },
});

const LoginPage = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();

  useEffect(() => {
    const savedEmail = localStorage.getItem("rememberedEmail");
    if (savedEmail) {
      form.setFieldsValue({ username: savedEmail, remember: true });
    }
  }, [form]);

  const onFinish = (values) => {
    console.log("Form Values:", values);

    if (values.remember) {
      localStorage.setItem("rememberedEmail", values.username);
    } else {
      localStorage.removeItem("rememberedEmail");
    }

    navigate("/");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage: "url('/images/homeless.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          backgroundColor: "rgba(0, 0, 0, 0.4)",
          zIndex: 0,
        }}
      />

      {/* Login Form */}
      <motion.div
        initial="hidden"
        animate="visible"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          padding: "40px",
          borderRadius: "16px",
          backdropFilter: "blur(15px)",
          WebkitBackdropFilter: "blur(15px)",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.5)",
          maxWidth: 400,
          width: "100%",
          zIndex: 1,
          color: "#fff",
          textAlign: "center",
        }}
      >
        {/* Logo Image */}
        <motion.img
          src="/images/logo.jpg"
          alt="Logo"
          style={{
            width: "200px",
            height: "auto",
            marginBottom: "20px",
            borderRadius: "50%",
          }}
          {...fadeIn(0)}
        />

        {/* Login Title */}
        <motion.h2
          style={{ fontWeight: "bold", color: "#fff", marginBottom: "30px" }}
          {...fadeIn(0.1)}
        >
          Login
        </motion.h2>

        <motion.div {...fadeIn(0.2)}>
          <Form
            form={form}
            name="login_form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
            <motion.div {...fadeIn(0.3)}>
              <Form.Item
                name="username"
                rules={[{ required: true, message: "Please input your gmail!" }]}
              >
                <Input
                  prefix={<UserOutlined style={{ color: "#4CAF50" }} />}
                  placeholder="gmail"
                  size="large"
                  style={{
                    color: "#4CAF50",
                    border: "1px solid #4CAF50",
                  }}
                />
              </Form.Item>
            </motion.div>

            <motion.div {...fadeIn(0.4)}>
              <Form.Item
                name="password"
                rules={[{ required: true, message: "Please input your password!" }]}
              >
                <Input.Password
                  prefix={<LockOutlined style={{ color: "#4CAF50" }} />}
                  placeholder="Password"
                  size="large"
                  iconRender={(visible) =>
                    visible ? (
                      <EyeTwoTone twoToneColor="#4CAF50" />
                    ) : (
                      <EyeInvisibleOutlined style={{ color: "#4CAF50" }} />
                    )
                  }
                  style={{
                    color: "#4CAF50",
                    border: "1px solid #4CAF50",
                  }}
                />
              </Form.Item>
            </motion.div>

            <motion.div {...fadeIn(0.5)}>
              <Form.Item name="remember" valuePropName="checked" style={{ marginBottom: 10 }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <Checkbox style={{ color: "#fff" }}>Remember me</Checkbox>
                  <a
                    href="#"
                    style={{
                      color: "#fff",
                      fontWeight: "600",
                      transition: "color 0.3s",
                    }}
                    onMouseEnter={(e) => (e.target.style.color = "#4CAF50")}
                    onMouseLeave={(e) => (e.target.style.color = "#fff")}
                  >
                    Forgot password?
                  </a>
                </div>
              </Form.Item>
            </motion.div>

            <motion.div {...fadeIn(0.6)}>
              <Form.Item>
                <Button
                  htmlType="submit"
                  block
                  size="large"
                  style={{
                    backgroundColor: "#4CAF50",
                    borderColor: "#4CAF50",
                    color: "#fff",
                    fontWeight: "bold",
                  }}
                >
                  Login
                </Button>
              </Form.Item>
            </motion.div>

            <motion.div
              {...fadeIn(0.7)}
              style={{ textAlign: "center", color: "#fff" }}
            >
              Don't have an account?{" "}
              <Link
                to="/register"
                style={{
                  color: "#fff",
                  fontWeight: "600",
                  transition: "color 0.3s",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => (e.target.style.color = "#4CAF50")}
                onMouseLeave={(e) => (e.target.style.color = "#fff")}
              >
                Register
              </Link>
            </motion.div>
          </Form>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default LoginPage;
